<?php

class BWFAN_API_Get_Tools_Setting extends BWFAN_API_Base {
	public static $ins;

	public static function get_instance() {
		if ( null === self::$ins ) {
			self::$ins = new self();
		}

		return self::$ins;
	}

	public function __construct() {
		parent::__construct();
		$this->method = WP_REST_Server::READABLE;
		$this->route  = '/settings/tools';
	}

	public function default_args_values() {
		$args = [];

		return $args;
	}

	public function process_api_call() {
		$tool_settings = array();
		if ( BWFAN_Common::is_automation_v1_active() ) { // check for single autonami active
			$tool_settings[] = array(
				"title"          => __( "Run All Queued Tasks", "wp-marketing-automations" ),
				"description"    => __( "This will schedule all the queued tasks to run now", "wp-marketing-automations" ),
				"task"           => "run_all_tasks",
				"task_text"      => __( "Schedule", "wp-marketing-automations" ),
				"processingText" => __( "We are schedule all the queued tasks to run now", "wp-marketing-automations" ),
			);

			$tool_settings[] = array(
				"title"          => __( "Delete All Completed Tasks", "wp-marketing-automations" ),
				"description"    => __( "This will schedule the deletion of all the so far completed tasks", "" ),
				"task"           => "delete_completed_tasks",
				"task_text"      => __( "Delete", "wp-marketing-automations" ),
				"processingText" => __( "We are deleting all completed tasks", "wp-marketing-automations" ),
			);

			$tool_settings[] = array(
				"title"          => __( "Delete All Failed Tasks", "wp-marketing-automations" ),
				"description"    => __( "This will schedule the deletion of all the so far failed tasks", "wp-marketing-automations" ),
				"task"           => "delete_failed_tasks",
				"task_text"      => __( "Delete", "wp-marketing-automations" ),
				"processingText" => __( "We are deleting all failed tasks", "wp-marketing-automations" ),
			);
		}

		if ( bwfan_is_woocommerce_active() ) { // check for woocommerce
			$tool_settings[] = array(
				"title"          => __( "Delete FunnelKit Automations Generated Expired Coupons", "wp-marketing-automations" ),
				"description"    => __( "This will schedule the deletion of all the expired coupons that are generated by FunnelKit Automations", "wp-marketing-automations" ),
				"task"           => "delete_expired_coupons",
				"task_text"      => __( "Delete", "wp-marketing-automations" ),
				"processingText" => __( "We are deleting all expired coupons generated by FunnelKit Automations", "wp-marketing-automations" ),
			);

			$tool_settings[] = array(
				"title"          => __( "Delete Lost Carts", "wp-marketing-automations" ),
				"description"    => __( "This will schedule the deletion of all lost carts in the system", "wp-marketing-automations" ),
				"task"           => "delete_lost_carts",
				"task_text"      => __( "Delete", "wp-marketing-automations" ),
				"processingText" => __( "We are deleting all lost carts in the system", "wp-marketing-automations" ),
			);
		}

		$this->response_code = 200;

		return $this->success_response( $tool_settings, __( 'Tool settings found', 'wp-marketing-automations' ) );
	}
}

BWFAN_API_Loader::register( 'BWFAN_API_Get_Tools_Setting' );
