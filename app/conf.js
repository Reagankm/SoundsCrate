/* @flow */
import { S_CONSUMER_KEY, S_CONSUMER_SECRET } from 'react-native-dotenv';
export default {
  discogs: {
    oauth: {
      key: S_CONSUMER_KEY,
      secret: S_CONSUMER_SECRET,
      request_token_url: 'https://api.discogs.com/oauth/request_token',
      authorize_url: 'https://discogs.com/oauth/authorize?oauth_token=',
      access_token_url: 'https://api.discogs.com/oauth/access_token',
      callback_url: 'soundscrate://',
    },
    api_url: 'https://api.discogs.com/',
    endpoints: {
      folders: 'users/{username}/collection/folders',
      folder: 'users/{username}/collection/folders/{id}/releases',
      folder_metadata: 'users/{username}/collection/folders/{folder_id}',
      identity: 'oauth/identity',
    },
    records_per_page: 20,
    folders_to_sort_by_title: ['Compilations']
  },
  app_user_agent: 'Sounds-Crate/1.0',
  storage_app_id: '@SoundsCrate:',
};
