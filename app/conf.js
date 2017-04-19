/* @flow */
export default {
  discogs: {
    oauth: {
      key: 'WieOJMYurdVQKBkKEwLM',
      secret: 'FarETUZNWCIBSQraJlbGzQgXEogVplMC',
      request_token_url: 'https://api.discogs.com/oauth/request_token',
      authorize_url: 'https://discogs.com/oauth/authorize?oauth_token=',
      access_token_url: 'https://api.discogs.com/oauth/access_token'
    },
    api_url: 'https://api.discogs.com/',
    endpoints: {
      collection: 'users/{username}/collection',
    },
    records_per_page: 20,
  },
  oauth_callback_url: 'soundscrate://',
  app_user_agent: 'Sounds-Crate/1.0'
};