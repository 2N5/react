import UserList from './UserList';
import { state } from './State';
import { users } from './users';
import { USERS_CONTAINER } from './constants';


export default class Search {
    constructor(inputNode) {
        this.inputNode = inputNode;
        this.createFilter();
    }

    createFilter() {
        this.inputNode.addEventListener('input', (e) => {
            const val = e.target.value;
            state.setState({
                users: users.filter(user => user.name.toUpperCase().includes(val.trim().toUpperCase()))
            });
            new UserList(USERS_CONTAINER, state.users);
        });
    }
}
