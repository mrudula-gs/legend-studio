/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export enum QUERY_BUILDER_STATE_HASH_STRUCTURE {
  // parameters state
  PARAMETERS_STATE = 'PARAMETERS_STATE',
  CONSTANT_STATE = 'CONSTANT_STATE',
  CONSTANT_EXPRESSION_STATE = 'CONSTANT_EXPRESSION_STATE',

  // projection state
  AGGREGATE_OPERATOR_AVERAGE = 'AGGREGATE_OPERATOR_AVERAGE',
  AGGREGATE_OPERATOR_COUNT = 'AGGREGATE_OPERATOR_COUNT',
  AGGREGATE_OPERATOR_DISTINCT = 'AGGREGATE_OPERATOR_DISTINCT',
  AGGREGATE_OPERATOR_DISTINCT_COUNT = 'AGGREGATE_OPERATOR_DISTINCT_COUNT',
  AGGREGATE_OPERATOR_JOIN_STRING = 'AGGREGATE_OPERATOR_JOIN_STRING',
  AGGREGATE_OPERATOR_MAX = 'AGGREGATE_OPERATOR_MAX',
  AGGREGATE_OPERATOR_MIN = 'AGGREGATE_OPERATOR_MIN',
  AGGREGATE_OPERATOR_STD_DEV_POPULATION = 'AGGREGATE_OPERATOR_STD_DEV_POPULATION',
  AGGREGATE_OPERATOR_STD_DEV_SAMPLE = 'AGGREGATE_OPERATOR_STD_DEV_SAMPLE',
  AGGREGATE_OPERATOR_SUM = 'AGGREGATE_OPERATOR_SUM',
  AGGREGATE_COLUMN_STATE = 'AGGREGATE_COLUMN_STATE',
  AGGREGATION_STATE = 'AGGREGATION_STATE',
  SIMPLE_PROJECTION_COLUMN_STATE = 'SIMPLE_PROJECTION_COLUMN_STATE',
  PROPERTY_EXPRESSION_STATE = 'PROPERTY_EXPRESSION_STATE',
  DERIVATION_PROJECTION_COLUMN_STATE = 'DERIVATION_PROJECTION_COLUMN_STATE',
  RESULT_SET_MODIFIER_STATE = 'RESULT_SET_MODIFIER_STATE',
  SORT_COLUMN_STATE = 'SORT_COLUMN_STATE',
  PROJECTION_STATE = 'PROJECTION_STATE',

  // post-filter
  POST_FILTER_TREE_GROUP_NODE_DATA = 'POST_FILTER_TREE_GROUP_NODE_DATA',
  POST_FILTER_TREE_CONDIITION_NODE_DATA = 'POST_FILTER_TREE_CONDITION_NODE_DATA',
  POST_FILTER_TREE_BLANK_CONDITION_NODE_DATA = 'POST_FILTER_TREE_BLANK_CONDITION_NODE_DATA',
  POST_FILTER_CONDITION_STATE = 'POST_FILTER_CONDITION_STATE',
  POST_FILTER_OPERATOR_CONTAIN = 'POST_FILTER_OPERATOR_CONTAIN',
  POST_FILTER_OPERATOR_NOT_CONTAIN = 'POST_FILTER_OPERATOR_NOT_CONTAIN',
  POST_FILTER_OPERATOR_END_WITH = 'POST_FILTER_OPERATOR_END_WITH',
  POST_FILTER_OPERATOR_NOT_END_WITH = 'POST_FILTER_OPERATOR_NOT_END_WITH',
  POST_FILTER_OPERATOR_EQUAL = 'POST_FILTER_OPERATOR_EQUAL',
  POST_FILTER_OPERATOR_NOT_EQUAL = 'POST_FILTER_OPERATOR_NOT_EQUAL',
  POST_FILTER_OPERATOR_GREATER_THAN = 'POST_FILTER_OPERATOR_GREATER_THAN',
  POST_FILTER_OPERATOR_GREATER_THAN_EQUAL = 'POST_FILTER_OPERATOR_GREATER_THAN_EQUAL',
  POST_FILTER_OPERATOR_IN = 'POST_FILTER_OPERATOR_IN',
  POST_FILTER_OPERATOR_NOT_IN = 'POST_FILTER_OPERATOR_IN',
  POST_FILTER_OPERATOR_IS_EMPTY = 'POST_FILTER_OPERATOR_IS_EMPTY',
  POST_FILTER_OPERATOR_IS_NOT_EMPTY = 'POST_FILTER_OPERATOR_IS_NOT_EMPTY',
  POST_FILTER_OPERATOR_LESS_THAN = 'POST_FILTER_OPERATOR_LESS_THAN',
  POST_FILTER_OPERATOR_LESS_THAN_EQUAL = 'POST_FILTER_OPERATOR_LESS_THAN_EQUAL',
  POST_FILTER_OPERATOR_START_WITH = 'POST_FILTER_OPERATOR_START_WITH',
  POST_FILTER_OPERATOR_NOT_START_WITH = 'POST_FILTER_OPERATOR_NOT_START_WITH',
  POST_FILTER_STATE = 'POST_FILTER_STATE',

  // watermark state
  WATERMARK_STATE = 'WATERMARK_STATE',

  // OLAPGroup state
  TDS_WINDOW_GROUPBY_STATE = 'TDS_WINDOW_STATE',
  TDS_WINDOW_GROUPBY_OPERATION_STATE = 'TDS_WINDOW_OPERATION_STATE',
  TDS_WINDOW_GROUPBY_AGG_OPERATION_STATE = 'TDS_WINDOW_AGG_OPERATION_STATE',
  TDS_WINDOW_COLUMN_STATE = 'TDS_WINDOW_COLUMN_STATE',
  TDS_WINDOW_COLUMN_SORTBY_STATE = 'TDS_WINDOW_COLUMN_SORTBY_STATE',
  TDS_WINDOW_OPERATOR_RANK = 'TDS_WINDOW_OPERATOR_RANK',
  TDS_WINDOW_OPERATOR_AVERAGE_RANK = 'TDS_WINDOW_OPERATOR_AVERAGE_RANK',
  TDS_WINDOW_OPERATOR_DENSE_RANK = 'TDS_WINDOW_OPERATOR_DENSE_RANK',
  TDS_WINDOW_OPERATOR_ROW_NUMBER = 'TDS_WINDOW_OPERATOR_ROW_NUMBER',
  TDS_WINDOW_OPERATOR_SUM = 'TDS_WINDOW_OPERATOR_SUM',
  TDS_WINDOW_OPERATOR_MAX = 'TDS_WINDOW_OPERATOR_MAX',
  TDS_WINDOW_OPERATOR_MIN = 'TDS_WINDOW_OPERATOR_MIN',
  TDS_WINDOW_OPERATOR_COUNT = 'TDS_WINDOW_OPERATOR_COUNT',
  TDS_WINDOW_OPERATOR_AVERAGE = 'TDS_WINDOW_OPERATOR_AVERAGE',

  // filter state
  FILTER_TREE_GROUP_NODE_DATA = 'FILTER_TREE_GROUP_NODE_DATA',
  FILTER_TREE_CONDIITION_NODE_DATA = 'FILTER_TREE_CONDITION_NODE_DATA',
  FILTER_TREE_BLANK_CONDITION_NODE_DATA = 'FILTER_TREE_BLANK_CONDITION_NODE_DATA',
  FILTER_CONDITION_STATE = 'FILTER_CONDITION_STATE',
  FILTER_OPERATOR_CONTAIN = 'FILTER_OPERATOR_CONTAIN',
  FILTER_OPERATOR_NOT_CONTAIN = 'FILTER_OPERATOR_NOT_CONTAIN',
  FILTER_OPERATOR_END_WITH = 'FILTER_OPERATOR_END_WITH',
  FILTER_OPERATOR_NOT_END_WITH = 'FILTER_OPERATOR_NOT_END_WITH',
  FILTER_OPERATOR_EQUAL = 'FILTER_OPERATOR_EQUAL',
  FILTER_OPERATOR_NOT_EQUAL = 'FILTER_OPERATOR_NOT_EQUAL',
  FILTER_OPERATOR_GREATER_THAN = 'FILTER_OPERATOR_GREATER_THAN',
  FILTER_OPERATOR_GREATER_THAN_EQUAL = 'FILTER_OPERATOR_GREATER_THAN_EQUAL',
  FILTER_OPERATOR_IN = 'FILTER_OPERATOR_IN',
  FILTER_OPERATOR_NOT_IN = 'FILTER_OPERATOR_IN',
  FILTER_OPERATOR_IS_EMPTY = 'FILTER_OPERATOR_IS_EMPTY',
  FILTER_OPERATOR_IS_NOT_EMPTY = 'FILTER_OPERATOR_IS_NOT_EMPTY',
  FILTER_OPERATOR_LESS_THAN = 'FILTER_OPERATOR_LESS_THAN',
  FILTER_OPERATOR_LESS_THAN_EQUAL = 'FILTER_OPERATOR_LESS_THAN_EQUAL',
  FILTER_OPERATOR_START_WITH = 'FILTER_OPERATOR_START_WITH',
  FILTER_OPERATOR_NOT_START_WITH = 'FILTER_OPERATOR_NOT_START_WITH',
  FILTER_STATE = 'FILTER_STATE',

  // graph fetch state
  GRAPH_FETCH_STATE = 'GRAPH_FETCH_STATE',
  GRAPH_FETCH_TREE_NODE_DATA = 'GRAPH_FETCH_TREE_NODE_DATA',

  // general
  MILESTONING_STATE = 'MILESTONING_STATE',
  UNSUPPORTED_QUERY_STATE = 'UNSUPPORTED_QUERY_STATE',
  QUERY_BUILDER_STATE = 'QUERY_BUILDER_STATE',

  CHECK_ENTITLEMENTS_STATE = 'CHECK_ENTITLEMENTS_STATE',

  // calendar
  AGGREGATE_CALENDAR_FUNCTION_ANNUALIZED = 'AGGREGATE_CALENDAR_FUNCTION_ANNUALIZED',
  AGGREGATE_CALENDAR_FUNCTION_CME = 'AGGREGATE_CALENDAR_FUNCTION_CME',
  AGGREGATE_CALENDAR_FUNCTION_CW = 'AGGREGATE_CALENDAR_FUNCTION_CW',
  AGGREGATE_CALENDAR_FUNCTION_CW_FM = 'AGGREGATE_CALENDAR_FUNCTION_CW_FM',
  AGGREGATE_CALENDAR_FUNCTION_CY_MINUS2 = 'AGGREGATE_CALENDAR_FUNCTION_CY_MINUS2',
  AGGREGATE_CALENDAR_FUNCTION_CY_MINUS3 = 'AGGREGATE_CALENDAR_FUNCTION_CY_MINUS3',
  AGGREGATE_CALENDAR_FUNCTION_MTD = 'AGGREGATE_CALENDAR_FUNCTION_MTD',
  AGGREGATE_CALENDAR_FUNCTION_P12WA = 'AGGREGATE_CALENDAR_FUNCTION_P12WA',
  AGGREGATE_CALENDAR_FUNCTION_P12WTD = 'AGGREGATE_CALENDAR_FUNCTION_P12WTD',
  AGGREGATE_CALENDAR_FUNCTION_P4WA = 'AGGREGATE_CALENDAR_FUNCTION_P4WA',
  AGGREGATE_CALENDAR_FUNCTION_P4WTD = 'AGGREGATE_CALENDAR_FUNCTION_P4WTD',
  AGGREGATE_CALENDAR_FUNCTION_P52WTD = 'AGGREGATE_CALENDAR_FUNCTION_P5WTD',
  AGGREGATE_CALENDAR_FUNCTION_P52WA = 'AGGREGATE_CALENDAR_FUNCTION_P52WA',
  AGGREGATE_CALENDAR_FUNCTION_PMA = 'AGGREGATE_CALENDAR_FUNCTION_PMA',
  AGGREGATE_CALENDAR_FUNCTION_PMTD = 'AGGREGATE_CALENDAR_FUNCTION_PMTD',
  AGGREGATE_CALENDAR_FUNCTION_PQTD = 'AGGREGATE_CALENDAR_FUNCTION_PQTD',
  AGGREGATE_CALENDAR_FUNCTION_PRIOR_DAY = 'AGGREGATE_CALENDAR_FUNCTION_PRIOR_DAY',
  AGGREGATE_CALENDAR_FUNCTION_PRIOR_YEAR = 'AGGREGATE_CALENDAR_FUNCTION_PRIOR_YEAR',
  AGGREGATE_CALENDAR_FUNCTION_PW = 'AGGREGATE_CALENDAR_FUNCTION_PW',
  AGGREGATE_CALENDAR_FUNCTION_PW_FM = 'AGGREGATE_CALENDAR_FUNCTION_PW_FM',
  AGGREGATE_CALENDAR_FUNCTION_PWA = 'AGGREGATE_CALENDAR_FUNCTION_PWA',
  AGGREGATE_CALENDAR_FUNCTION_PWTD = 'AGGREGATE_CALENDAR_FUNCTION_PWTD',
  AGGREGATE_CALENDAR_FUNCTION_PYMTD = 'AGGREGATE_CALENDAR_FUNCTION_PYMTD',
  AGGREGATE_CALENDAR_FUNCTION_PYQTD = 'AGGREGATE_CALENDAR_FUNCTION_PYQTD',
  AGGREGATE_CALENDAR_FUNCTION_PYTD = 'AGGREGATE_CALENDAR_FUNCTION_PYTD',
  AGGREGATE_CALENDAR_FUNCTION_PYWA = 'AGGREGATE_CALENDAR_FUNCTION_PYWA',
  AGGREGATE_CALENDAR_FUNCTION_PYWTD = 'AGGREGATE_CALENDAR_FUNCTION_PYWTD',
  AGGREGATE_CALENDAR_FUNCTION_QTD = 'AGGREGATE_CALENDAR_FUNCTION_QTD',
  AGGREGATE_CALENDAR_FUNCTION_REPORT_END_DAY = 'AGGREGATE_CALENDAR_FUNCTION_REPORT_END_DAY',
  AGGREGATE_CALENDAR_FUNCTION_WTD = 'AGGREGATE_CALENDAR_FUNCTION_WTD',
  AGGREGATE_CALENDAR_FUNCTION_YTD = 'AGGREGATE_CALENDAR_FUNCTION_YTD',
}
