import React, { Component } from 'react'

export default class NavBar extends Component {
 
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand text-center" href="/">Feroz's News</a>
            <a href='/' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {/* <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={this.chooseSource('general')} >General</button>
                </li> */}
                {/* <li className="nav-item">
                <button className="nav-link" onClick={ this.setState({source: 'business'}) } >Business</button>
                </li> */}
                {/* <li className="nav-item">
                <button className="nav-link" onClick={this.chooseSource('technology')} >Technology</button>
                </li>
                <li className="nav-item">
                <button className="nav-link" onClick={this.chooseSource('sports')} >sports</button>
                </li>
                <li className="nav-item">
                <button className="nav-link" onClick={this.chooseSource('health')} >health</button>
                </li> */}
  
            </ul>
            </div>
        </div>
</nav>
      </div>
    )
  }
}