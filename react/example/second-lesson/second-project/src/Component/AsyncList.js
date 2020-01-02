import React, { Component } from 'react';
export default class AsyncList extends Component {


    constructor(props) {
        super(props);
        // this.state = {
        //     listItems: [],
        //     hasError: false,
        //     isLoading: false
        // }
    }

    // makeRequest() {
    //     this.setState({
    //         isLoading: true
    //     })
    //     axios({
    //         url: "http://52.77.254.77:3010/employees",
    //         method: "get",
    //         responseType: "json"
    //     }).then(result => {
    //         this.setState({
    //             isLoading: false
    //         })
    //         if (result.status === 200) {
    //             const data = result.data;
    //             this.setState({
    //                 listItems: data,

    //             })
    //         }
    //     })
    //         .catch((error) => {
    //             console.log(error)
    //             this.setState({
    //                 isLoading: false,
    //                 hasError: error.message
    //             })

    //         })
    // }
    // after render is ok, load data
    componentDidMount() {
        // this.makeRequest();
        // this.timer = setInterval(() => {
        //     this.makeRequest();
        // }, 5000);
        this.props.updateEmployee("http://52.77.254.77:3010/employees");
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const { listItems } = this.props;
        let hasError = false;
        let isLoading = false;
        // let listItems = this.props.listItems;
        let listRender = null;
        if (isLoading) {
            listRender = <div>Loading</div>;
        } else if (hasError !== false) {
            listRender = <div>{hasError}</div>
        } else {
            listRender =
                <div> <div className="container">
                    {listItems.map((item) => {
                        return (
                            <div key={item.id}>{item.employee_name}</div>
                        )
                    })}
                    {/* {listItems} */}
                </div></div>;
        }
        return (
            <div>
                <h3>Async-List</h3>
                {listRender}
            </div>
        );
    }
}