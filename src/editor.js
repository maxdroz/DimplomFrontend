import React from 'react';
import { Circle, Stage, Layer, Text } from 'react-konva';

class Editor extends React.Component  {  
    stageWidth = 1000;

    state = {
        w: 1000
    }

    fitStageIntoParentContainer = () => {
        var container = document.querySelector('#stage-parent');

        // now we need to fit stage into parent
        var containerWidth = container.offsetWidth;
        // to do this we need to scale the stage
        var scale = containerWidth / this.stageWidth;

        this.setState({w: this.stageWidth * scale * 0.8});
    }
      
    componentDidMount() {
        this.fitStageIntoParentContainer()
        window.addEventListener('resize', this.fitStageIntoParentContainer);
    }

    render() {
        return <div id="stage-parent">
        <Stage width={this.state.w} height={300}>
            <Layer>
                <Circle
                    x={10}
                    y={20}
                    draggable
                    radius={50000}
                    fill={"red"}
                    />
                <Text text={this.props.idDiscipline} fontSize="30" />
                <Text x={50} text={this.props.idTeacher} fontSize="30" />
            </Layer>
        </Stage>
    </div>
    }
}

export default Editor