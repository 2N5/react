import Search from './Search';
import UserList from './UserList';
import { state } from './State'
import { USERS_CONTAINER, SEARCH_INPUT } from './constants';


new Search(SEARCH_INPUT);
new UserList(USERS_CONTAINER, state.users);
