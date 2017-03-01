var AllItems = React.createClass({
    handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success: () => {
                this.removeItemClient(id);
            }
        });
    },
    removeItemClient(id) {
        this.props.getItems();
    },
    onUpdate(item) {
        this.props.onUpdate(item);
    },
    render() {
        var items = this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <Item item={item} handleDelete={this.handleDelete.bind(this, item.id)} handleUpdate={this.onUpdate}/>
                </div>
            )
        });
        return (
            <div>
                {items}
            </div>
        )
    }
});
