import { Component } from 'react'
import InputForm from './components/InputForm'
import BusinessCard from './components/BusinessCard'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    data: null,
    business: null,
  }

  handleSubmit = async formData => {
    try {
      const res = await axios.post('http://localhost:5000/business-data', formData)
      this.setState({
        data: res.data,
        business: formData,
      })
    } catch (error) {
      console.error('Error submitting data:', error)
    }
  } 

  handleRegenerate = async () => {
    const { business } = this.state
    if (!business) return

    try {
      const res = await axios.get(
        `http://localhost:5000/regenerate-headline?name=${business.name}&location=${business.location}`
      )
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          headline: res.data.headline,
        },
      }))
    } catch (error) {
      console.error('Error regenerating headline:', error)
    }
  }

  render() {
    const { data } = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Mini Local Business Dashboard</h1>
        <InputForm onSubmit={this.handleSubmit} />
        <BusinessCard data={data} onRegenerate={this.handleRegenerate} />
      </div>
    )
  }
}

export default App
