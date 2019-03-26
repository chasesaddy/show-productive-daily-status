const config = {
  api_base_url: 'https://api.instagram.com', 
  oauth_path: '/oauth/authorize', 
  client_id: '', 
  response_type: 'token', 
  scope: 'user:read user:write', 
  redirect_uri: window.location.origin + '/', 
  identifier: 'instagram' 
}

export default config;
