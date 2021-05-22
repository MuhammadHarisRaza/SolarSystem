import React from 'react'
import {asset, Text, View, VrButton, Model, StyleSheet} from 'react-vr'

export default class Descriptions extends React.Component {
    constructor(){
        super();
        this.state = {
            rotation:0,
            selectedPlanet: "Earth",
            selectedPlanetDescription: "Earth is the 3rd planet of the solar system",
            modelName: "sphere.obj",
            textureName: "earth.png",
            selectedPlanetScale:[0.9,0.9,0.9],
            rotateSaturn:0
        }
    }
    componentDidMount(){
        this.rotate()
    }
    rotate(){
        this.setState({
            rotation: this.state.rotation + 0.3,

        })
        if(this.state.rotation >360){
            this.setState({
                rotation:1
            })
        }
        requestAnimationFrame(this.rotate.bind(this))
    }
    changePlanet (selection){
        let planetName
        let planetDescription
        let planetextureName
        let planetModelName
        let planetScale

        switch(selection){
            case 1:
                planetName = "Mercury"
                planetDescription = "Mercury is the 1st planet of the universe"
                planetextureName = "mercury.jpg"
                planetModelName = "sphere.obj"
                planetScale = [0.4,0.4,0.4]
                break
            case 2:
                planetName = "Venus"
                planetDescription = "Venus is the 2nd planet of the universe"
                planetextureName = "venus.jpg"
                planetModelName = "sphere.obj"
                planetScale = [0.7,0.7,0.7]
                break
            case 3:
                planetName = "Earth"
                planetDescription = "Earth is the 3rd planet of the universe"
                planetextureName = "earth.png"
                planetModelName = "sphere.obj"
                planetScale = [0.9,0.9,0.9]
                break
            case 4:
                planetName = "Mars"
                planetDescription = "Mars is the 4th planet of the universe"
                planetextureName = "mars.jpg"
                planetModelName = "sphere.obj"
                planetScale = [1.1,1.1,1.1]
                break
            case 5:
                planetName = "Jupyter"
                planetDescription = "Jupyter is the 5th planet of the universe"
                planetextureName = "jupyter.jpg"
                planetModelName = "sphere.obj"
                planetScale = [1.3,1.3,1.3]
                break
            case 6:
                planetName = "Saturn"
                planetDescription = "Saturn is the 6th planet of the universe"
                planetextureName = "saturn.jpg"
                planetModelName = "Saturn.obj"
                planetScale = [1.1,1.1,1.1]
                this.setState({rotateSaturn:30})
                break
            case 7:
                planetName = "Uranus"
                planetDescription = "Uranus is the 7th planet of the universe"
                planetextureName = "uranus.jpg"
                planetModelName = "sphere.obj"
                planetScale = [1,1,1]
                break
            case 8:
                planetName = "Neptune"
                planetDescription = "Neptune is the 8th planet of the universe"
                planetextureName = "neptune.jpg"
                planetModelName = "sphere.obj"
                planetScale = [1,1,1.1,1.1]
                break
        }
        this.setState({
            selectedPlanet:planetName,
            selectedPlanetDescription: planetDescription,
            textureName: planetextureName,
            modelName: planetModelName,
            selectedPlanetScale: planetScale
        })
    }
    render() {

        const styles = StyleSheet.create({
            buttonText:{
                margin:0,
                fontSize:0.3,
                textAlign:'center',
                backgroundColor:'#CF3C7E'
            }
        })
        return (
            <View
                style={{ 
                    transform:[
                        {
                            translate:[0,-3,0]
                        },
                        {
                            rotateX:-90
                        }
                    ],
                    flexDirection: 'row'
                }}
            >
                <View>
                    <Model
                        source={{
                            obj: asset(this.state.modelName)
                          }}
                          texture={asset(this.state.textureName)}
                          style={{
                            transform: [
                              {
                                translate: [-4,-2,-5]
                              },
                              {
                                  scale: this.state.selectedPlanetScale
                              },
                              {
                                  rotateX: this.state.rotateSaturn
                              },
                              {
                                rotateY:this.state.rotation
                            }
                            ]
                          }}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            fontSize:0.3,
                            textAlign:'center'
                        }}
                    >
                        {
                            this.state.selectedPlanet
                        }
                    </Text>
                    <Text
                        style={{
                            margin:0.1,
                            fontSize:0.2,
                            width:2
                        }}
                    >
                        {
                            this.state.selectedPlanetDescription
                        }

                    </Text>                  
                </View>
                <View
                    style={{
                        flexDirection:'column',
                        height:4,
                        justifyContent: 'space-between'
                    }}
                >
                    <VrButton onClick={()=>this.changePlanet(1)}>
                        <Text style={styles.buttonText}>Mercury</Text>
                    </VrButton>
                    <VrButton onClick={()=>this.changePlanet(2)}>
                        <Text style={styles.buttonText}>Venus</Text>
                    </VrButton>
                    <VrButton onClick={()=>this.changePlanet(3)}>
                        <Text style={styles.buttonText}>Earth</Text>
                    </VrButton>
                    <VrButton onClick={()=>this.changePlanet(4)}>
                        <Text style={styles.buttonText}>Mars</Text>
                    </VrButton>
                    <VrButton onClick={()=>this.changePlanet(5)}>
                        <Text style={styles.buttonText}>Jupiter</Text>
                    </VrButton>
                    <VrButton onClick={()=>this.changePlanet(6)}>
                        <Text style={styles.buttonText}>Saturn</Text>
                    </VrButton>
                    <VrButton onClick={()=>this.changePlanet(7)}>
                        <Text style={styles.buttonText}>Uranus</Text>
                    </VrButton>
                    <VrButton onClick={()=>this.changePlanet(8)}>
                        <Text style={styles.buttonText}>Neptune</Text>
                    </VrButton>
                </View>
            </View>
        )
    }
}