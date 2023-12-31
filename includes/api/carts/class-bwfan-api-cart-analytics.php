<?php

class BWFAN_API_Cart_Analytics extends BWFAN_API_Base {
	public static $ins;

	public static function get_instance() {
		if ( null === self::$ins ) {
			self::$ins = new self();
		}

		return self::$ins;
	}

	public $total_count = 0;

	public function __construct() {
		parent::__construct();
		$this->method = WP_REST_Server::READABLE;
		$this->route  = '/analytics/carts/';
	}

	public function default_args_values() {
		return array(
			'no_of_days'        => '',
			'date_range_first'  => '',
			'date_range_second' => ''
		);
	}

	public function process_api_call() {
		$response['totals']    = $this->prepare_data_for_analytics();
		$response['intervals'] = $this->prepare_data_for_analytics( 'interval' );

		$this->response_code = 200;

		return $this->success_response( $response );
	}

	public function prepare_data_for_analytics( $is_interval = '' ) {
		$start_date        = ( isset( $this->args['after'] ) && '' !== $this->args['after'] ) ? $this->args['after'] : BWFAN_Cart_Analytics::default_date( WEEK_IN_SECONDS )->format( BWFAN_Cart_Analytics::$sql_datetime_format );
		$end_date          = ( isset( $this->args['before'] ) && '' !== $this->args['before'] ) ? $this->args['before'] : BWFAN_Cart_Analytics::default_date()->format( BWFAN_Cart_Analytics::$sql_datetime_format );
		$intervals_request = ( isset( $this->args['interval'] ) && '' !== $this->args['interval'] ) ? $this->args['interval'] : 'week';

		$captured_carts      = BWFAN_Cart_Analytics::get_captured_cart( $start_date, $end_date, $intervals_request, $is_interval );
		$recovered_carts     = BWFAN_Cart_Analytics::get_recovered_cart( $start_date, $end_date, $intervals_request, $is_interval );
		$lost_carts          = BWFAN_Cart_Analytics::get_lost_cart( $start_date, $end_date, $intervals_request, $is_interval );
		$captured_cart_count = isset( $captured_carts[0]['count'] ) ? $captured_carts[0]['count'] : 0;
		$captured_cart_count += isset( $lost_carts[0]['count'] ) ? $lost_carts[0]['count'] : 0;
		$recovery_percentage = BWFAN_Cart_Analytics::get_recovery_rate( $captured_cart_count, isset( $recovered_carts[0]['count'] ) ? $recovered_carts[0]['count'] : 0 );

		$result    = [];
		$intervals = [];
		/** when interval present */
		if ( ! empty( $is_interval ) ) {
			$intervals_all = BWFAN_Cart_Analytics::intervals_between( $start_date, $end_date, $intervals_request );
			foreach ( $intervals_all as $all_interval ) {
				$interval   = $all_interval['time_interval'];
				$start_date = $all_interval['start_date'];
				$end_date   = $all_interval['end_date'];

				$captured_cart       = BWFAN_Cart_Analytics::maybe_interval_exists( $captured_carts, 'time_interval', $interval );
				$recovered_cart      = BWFAN_Cart_Analytics::maybe_interval_exists( $recovered_carts, 'time_interval', $interval );
				$lost_cart           = BWFAN_Cart_Analytics::maybe_interval_exists( $lost_carts, 'time_interval', $interval );
				$recovery_percentage = BWFAN_Cart_Analytics::get_recovery_rate( isset( $captured_cart[0]['count'] ) ? $captured_cart[0]['count'] : 0, isset( $recovered_cart[0]['count'] ) ? $recovered_cart[0]['count'] : 0 );

				$intervals['interval']       = $interval;
				$intervals['start_date']     = $start_date;
				$intervals['date_start_gmt'] = BWFAN_Cart_Analytics::convert_local_datetime_to_gmt( $start_date )->format( BWFAN_Dashboards::$sql_datetime_format );
				$intervals['end_date']       = $end_date;
				$intervals['date_end_gmt']   = BWFAN_Cart_Analytics::convert_local_datetime_to_gmt( $end_date )->format( BWFAN_Dashboards::$sql_datetime_format );

				$intervals['subtotals'] = array(
					'recoverable_carts' => isset( $captured_cart[0]['count'] ) ? $captured_cart[0]['count'] : 0,
					'potential_revenue' => isset( $captured_cart[0]['sum'] ) ? $captured_cart[0]['sum'] : 0,
					'recovered_cart'    => isset( $recovered_cart[0]['count'] ) ? $recovered_cart[0]['count'] : 0,
					'recovered_revenue' => isset( $recovered_cart[0]['sum'] ) ? $recovered_cart[0]['sum'] : 0,
					'recovery_rate'     => $recovery_percentage,
					'lost_cart'         => isset( $lost_cart[0]['count'] ) ? $lost_cart[0]['count'] : 0,
				);
				$result[]               = $intervals;
			}

			return $result;
		}

		return [
			'recoverable_carts' => isset( $captured_carts[0]['count'] ) ? $captured_carts[0]['count'] : 0,
			'potential_revenue' => isset( $captured_carts[0]['sum'] ) ? $captured_carts[0]['sum'] : 0,
			'recovered_cart'    => isset( $recovered_carts[0]['count'] ) ? $recovered_carts[0]['count'] : 0,
			'recovered_revenue' => isset( $recovered_carts[0]['sum'] ) ? $recovered_carts[0]['sum'] : 0,
			'recovery_rate'     => $recovery_percentage,
			'lost_cart'         => isset( $lost_carts[0]['count'] ) ? $lost_carts[0]['count'] : 0,
		];
	}

	public function get_result_total_count() {
		return $this->total_count;
	}
}

BWFAN_API_Loader::register( 'BWFAN_API_Cart_Analytics' );
