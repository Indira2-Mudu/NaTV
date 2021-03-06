import React from "react";
import ContentNews from "./ContentNews/ContentNews";
import { withTranslation } from "react-i18next";
let inputy = React.createRef()

class ChannelList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            id: {}
        }

        this.GetId = this.GetId.bind(this)
    }


    componentDidMount() {
        this.getPostById();
    }

    getPostById() {
        const url = "https://na-tv.herokuapp.com/api/v1/TvChannel/all-channels";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('Упсс, что-то пошло не так. Код статуса: ', response.status);
                }
            })
            .then(data => this.setState({post:data}))
    }

    GetId(e){
     this.setState({
            id: e.target.dataset.id
        })
    }


    // Gyu(e){
    //     console.log(e.currentTarget)
    // }

    render() {
        const {t} = this.props;
        // console.log(this.props)
        return (
            <div className="pd-40 channel-list-cont" >
                <input id="idd" type="hidden" value={this.state.id}/>
                <h2>{t("tv")}</h2>
                <div className="channel-list">
                    <div className="title">
                        <div className="d-flex justify-content-between mt-4">
                            <div className="@media">
                                <label>{t("tv1")}</label>
                            </div>
                            <div className="@media">
                                <label className="date">{t("tv2")}</label>
                            </div>
                            <div className="@media mx">
                                <label> {t("tv3")}</label>
                            </div>
                        </div>
                    </div>
                    <div className="content-news">
                        <div onClick={this.GetId}>
                        {
                             this.state.post.map(item => {
                                return <ContentNews
                                    channelName={item.channelName}
                                    photo={item.photo}
                                    id={item.id}
                                />

                            })
                        }
                        </div>

                            <div className="total">
                                <div className="more-channel">
                                    <a href="#">{t("tv4")} </a>
                                </div>
                                <div className="total-block">
                                    <div className='floatR'>{t("tv5")}<span
                                        className="fw-bold"> 0 сом</span></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation() (ChannelList);