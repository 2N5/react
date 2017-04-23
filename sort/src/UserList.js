export default class UserList {
    constructor(node, users) {
        this.node = node;
        this.users = users;
        this.renderUsers();
    }

    renderUsers() {
        const li = (value) => {
            const li = document.createElement('li');
            li.appendChild(value instanceof HTMLElement ? value : document.createTextNode(value));
            return li;
        };

        this.node.innerHTML = '';
        this.users.forEach(user => this.node.appendChild(li(user.name)));
    }
}
