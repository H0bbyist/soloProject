
const initialState = {
    loggedIn: params.access_token ? true : false,
      myAlbums: '',
      nowPlaying: {
        name: 'Not Checked',
        image: ''
      }
}


export default reducer