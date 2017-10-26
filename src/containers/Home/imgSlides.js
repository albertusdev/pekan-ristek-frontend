import React from 'react';
import styled from 'styled-components';

const Images = React.createClass({
  render: function() {
    let self = this;
    let divStyle = {
      left: this.props.active * (-100) + '%',
      width: 4 * (100) + '%'
    };
    let width = {
      width: (100/this.props.items.length) + '%'
    }
    return (
      <SliderWrapper>
        <ul className="slides" style={divStyle}>
        {
          this.props.items.map(function(m, index){
          if(self.props.useImages == 'true') {
            return <li style={width}><img src = {m} /></li>
          } else {
            return <li style={width}>{index}</li>
          }
        })
      }
        </ul>
      </SliderWrapper>
    )
  }
});

const Pagers = React.createClass({
  updateSlide: function(i) {
    this.props.callbackParent(i);
  },
  render: function() {
    let self = this;
    return (
      <div>
        <Page>
        {
          this.props.items.map(function(m, index){
            return <li onClick={this.updateSlide.bind(this, index)}></li>
        }, this)}
        </Page>
      </div>
    )
  }
});

const Slider = React.createClass({

  getInitialState: function(){
    return { active: 0 };
  },
  onPagerClicked: function(newState) {
    this.setState({ active: newState });
  },
  render: function() {
    var self = this;
    return (
      <ImgSlider>
        <Images items={this.props.slides}
          useImages={this.props.useImages}
          active={this.state.active}
        />
        <Pagers items={this.props.slides} callbackParent={this.onPagerClicked} />
      </ImgSlider>
    );
  }
})

export default Slider;

const ImgSlider = styled.div`
  width: 100%;
`;

const Page = styled.ul`
  text-align: center;
  top: -50px;
  z-index: 1000;
  position: relative;
  padding: 0;
  li {
    width: 1.2rem;
    height: 1.2rem;
    border: 0.2rem solid #fff;
    display: inline-block;
    border-radius: 20px;
    margin-right: 8px;
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 27rem;
  width: 100%;
  .slides {
    -webkit-transition: all 1.5s;
    -moz-transition: all 1.5s;
    -ms-transition: all 1.5s;
    transition: all 1.5s;
    position: absolute;
    top: 0;
    height: 100%;
    padding: 0;
    li {
      float: left;
      background: #ccc;
      list-style-type: none;
      height: inherit;
      img {
        width: 100%;
        height: inherit;
        object-fit: cover;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
  .slides::after {
    -webkit-transition: all 1.5s;
    -moz-transition: all 1.5s;
    -ms-transition: all 1.5s;
    transition: all 1.5s;
  }
  @media screen and (max-width: 767px) {
    height: 20rem;
  }
  @media screen and (max-width: 640px) {
    height: 15rem;
  }
`;
