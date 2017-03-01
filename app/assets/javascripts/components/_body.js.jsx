var Body = React.createClass({
    getInitialState() {
        return {items: []}
    },
    componentDidMount() {
        this.getItems();
    },
    getItems() {
        $.getJSON('/api/v1/items.json', (response) => {
            this.setState({items: response})
        });
    },
    handleUpdate(item) {
        $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: {
                item: item
            },
            success: () => {
                this.updateItems(item);
            }
        })
    },
    updateItems(item) {
        var items = this.state.items.filter((i) => {
            return i.id != item.id
        });
        items.push(item);
        this.setState({items: items});
    },
    handleSubmit(item) {
        this.getItems();
    },
    render() {
        return (
            <div>
              <NewItem handleSubmit={this.handleSubmit}/>
              <AllItems items={this.state.items} getItems={this.getItems} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});
