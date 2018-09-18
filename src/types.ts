export type BuildedConditionSet = {
  conditions: Object;
  pipeline: Object[];
};

export interface FilterFieldMappingMatch<ValueT = any> {
  type: 'MATCH_1_TO_1';
  key?: string;
  format?: (value: ValueT) => any;
}

export interface FilterFieldMappingCustom<ValueT = any> {
  type: 'CUSTOM_CONDITION';
  format: (value: ValueT) => Object;
}

export interface FilterFieldMappingPipeline<ValueT = any> {
  type: 'AGGREGATE_PIPELINE';
  pipeline: Object[] | ((arg: ValueT) => Object[]);
}

// See Discriminated Unions at http://www.typescriptlang.org/docs/handbook/advanced-types.html
export type FilterFieldMapping<ValueT> =
  | FilterFieldMappingMatch<ValueT>
  | FilterFieldMappingCustom<ValueT>
  | FilterFieldMappingPipeline<ValueT>
  | boolean;

export interface GraphQLFilterItem {
  [filterKey: string]: any;
}

export interface GraphQLFilter extends GraphQLFilterItem {
  OR?: GraphQLFilter[];
  AND?: GraphQLFilter[];
}

export interface GraphQLArgFilter {
  filter: GraphQLFilter;
}
