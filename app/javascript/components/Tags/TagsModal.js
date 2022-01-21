import React, { Component } from 'react'
import axios from 'axios';

import Modal from '../Modal';
import CreateTagForm from './CreateTagForm';
import DeleteTagForm from './DeleteTagForm';

class TagsModal extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.state = {
            tags: [],

            showModal: false,
            tagName: '',
            selectedTagId: '',
            tagFormType: '',
        };
    }

    componentDidMount() {
        const url = '/api/tags/index';

        axios.get(url).then(res => {
            const tags = res.data;
            this.setState({ tags: tags });

            console.log(tags);
        });
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    }
    
    handleSubmitAdd = (event) => {
        event.preventDefault();

        const tag = {
            name: this.state.tagName,
        };

        const url = '/api/tags/create';

        const token = document.querySelector('meta[name="csrf-token"]').content;  
        axios.post(url, { tag }, {withCredentials: true,
        headers:
        {
            "X-CSRF-Token": token,
            "Content-Type": "application/json",
        }})
        .then(res => {
            console.log(res.data);
            window.location.assign("/tasks");
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleSubmitDelete = (event) => {
        event.preventDefault();

        if (confirm("Are you sure?")) {
            const url = '/api/tags/' + this.state.selectedTagId;

            const token = document.querySelector('meta[name="csrf-token"]').content;  
            axios.delete(url, {withCredentials: true,
            headers:
            {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            }})
            .then(res => {
                console.log(res.data);
                window.location.assign("/tasks");
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    showModal = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                showModal: true,
            }
        });
    }

    hideModal = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                showModal: false,
            }
        });
    }
    
    setTagForm = (mode) => {        
        this.setState((prevState) => {
            return {
                ...prevState,
                tagFormType: mode,
            }
        });
    }

    render() {
        return (
            <div>
                <p>
                    <button
                        className='nice-button'
                        style={{margin: "10px"}}
                        onClick={() => {
                            this.setTagForm("add");
                            this.showModal();
                        }}>
                            Add tag
                    </button>

                    <button
                        className='nice-button'
                        style={{margin: "10px"}}
                        onClick={() => {
                            this.setTagForm("delete");
                            this.showModal();
                        }}>
                            Delete tag
                    </button>
                </p>

                <Modal
                    show={this.state.showModal}
                    handleClose={this.hideModal}
                >
                    {
                        (this.state.tagFormType == "add") 
                        ? <CreateTagForm 
                                tagName={this.state.tagName}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmitAdd}
                        />
                        : <DeleteTagForm
                                selectedTagId={this.state.selectedTagId}
                                tags={this.state.tags}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmitDelete}
                        />
                    }
                </Modal>
            </div>
        )
    }
}

export default TagsModal