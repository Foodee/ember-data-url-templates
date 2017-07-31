import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlTemplate: "{+host}{/namespace}/my-posts",
  queryRecordUrlTemplate: "{+host}{/namespace}/my-posts/{slug}",
  updateRecordUrlTemplate: "{+host}{/namespace}/my-posts/{slug}",
  reactionsUrlTemplate: "{+host}{/namespace}/posts/{id}/reactions",
  namespace: 'api',
});
