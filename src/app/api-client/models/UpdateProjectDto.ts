// tslint:disable
/**
 * FOM API
 * API for FOM backend
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface UpdateProjectDto
 */
export interface UpdateProjectDto {
  /**
   * @type {number}
   * @memberof UpdateProjectDto
   */
  revisionCount: number;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  createTimestamp: string;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  createUser: string;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  updateTimestamp: string;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  updateUser: string;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  name: string;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  description: string;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  commentingOpenDate: string;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  commentingClosedDate: string;
  /**
   * @type {number}
   * @memberof UpdateProjectDto
   */
  fspId: number;
  /**
   * @type {number}
   * @memberof UpdateProjectDto
   */
  districtId: number;
  /**
   * @type {object}
   * @memberof UpdateProjectDto
   */
  district: object;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  forestClientNumber: string;
  /**
   * @type {object}
   * @memberof UpdateProjectDto
   */
  forestClient: object;
  /**
   * @type {string}
   * @memberof UpdateProjectDto
   */
  workflowStateCode: string;
  /**
   * @type {object}
   * @memberof UpdateProjectDto
   */
  workflowState: object;
}
