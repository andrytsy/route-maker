import React, { Component } from 'react'
import './index.styl';

export default class Menu extends Component {
    constructor() {
        super()

        this.state = {
            currentPoint: '',
            points: []
        }

        this.currentPointHandle = this.currentPointHandle.bind(this)
    }
    
    currentPointHandle(event) {
        this.setState({currentPoint: event.target.value})
    }

    addPoint() {
        if (this.state.currentPoint.trim() === '') return null

        let newPoint = {
            id: 'point_' + Math.floor(Math.random() * 100001),
            name: this.state.currentPoint
        }

        this.setState(prevState => ({ points: [...prevState.points, newPoint] }))
        this.setState({currentPoint: ''})
    }

    removePoint(id) {
        
    }
    
    getPointsList() {
        return this.state.points.map((point, index) => (
            <li key = {point.id} className='points-group__item item-block'>
                <span className='item-block__text'>{point.name}</span> 
                <span className='item-block__btn' onClick = {this.removePoint(point.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 10.586L8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414L12 10.586z"></path>
                    </svg>
                </span>
            </li>
        ))
    }

    render() {
        return (
            <div className='menu-container'>
                <div className='menu-container__input-block input-group'>
                    <input className='input-group__input' id='current-point-input' type='text'
                           value = {this.state.currentPoint}
                           onChange = {this.currentPointHandle}
                    />
                    
                    <div className='input-group__btn' onClick = {this.addPoint.bind(this)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                    </div>
                </div>
                <ul className='menu-container__points points-group'>
                    {this.getPointsList()}
                </ul>
            </div>
        )
    }
}
