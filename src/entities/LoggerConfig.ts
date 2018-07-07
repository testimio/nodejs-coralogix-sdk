/**
 * Logger configuration object
 *
 * @file        This file contains logger configuration object description
 * @author      Yoni Farin <farin99@gmail.com>
 * @author      Eldar Aliiev <eldar@coralogix.com>
 * @link        https://coralogix.com/
 * @copyright   Coralogix Ltd.
 * @licence     Apache-2.0
 * @version     1.0.0
 * @since       1.0.0
 */

import {Constants} from "../constants";

/**
 * @class LoggerConfig
 * @classdesc Class LoggerConfig representing logger configuration container
 * @description Create new instance of logger configuration container class
 * @param {object} [config] - Logger configuration parameters
 */
export class LoggerConfig {
    /**
     * @member {string} privateKey
     * @memberOf LoggerConfig
     * @description Coralogix account private key
     * @default FAILED_PRIVATE_KEY
     * @public
     */
    public privateKey: string = Constants.FAILED_PRIVATE_KEY;

    /**
     * @member {string} applicationName
     * @memberOf LoggerConfig
     * @description Application name
     * @default NO_APP_NAME
     * @public
     */
    public applicationName: string = Constants.NO_APP_NAME;

    /**
     * @member {string} subsystemName
     * @memberOf LoggerConfig
     * @description Subsystem name
     * @default NO_SUB_SYSTEM
     * @public
     */
    public subsystemName: string = Constants.NO_SUB_SYSTEM;

    /**
     * @member {boolean} debug
     * @memberOf LoggerConfig
     * @description Debug mode
     * @default false
     * @public
     */
    public debug: boolean = false;

    /**
     * @description Initialize new instance of logger configuration container class
     * @param {object} [config] - Logger configuration parameters
     */
    constructor(config?) {
        this.privateKey = config.privateKey || this.privateKey;
        this.applicationName = config.applicationName || this.applicationName;
        this.subsystemName = config.subsystemName || this.subsystemName;
        this.debug = config.debug;
    }
}