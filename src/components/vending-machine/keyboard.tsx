import React from 'react';

interface Props {
    sequenceLenght: number;
    displayText(textToDisplay: string);
    onSequenceFinished(sequence: string);
}

interface State {
    currentSequence: string;
}

export default class Keyboard extends React.Component<Props, State> {

    constructor() {
        super();
        this.state = { currentSequence: '' };
    }

    private onCancelPressed() {
        this.setState({ currentSequence: '' });
        this.props.displayText('');
        }

    private onEnterPressed() {
        if (this.state.currentSequence.length !== this.props.sequenceLenght) {
            return;
        }

        this.props.onSequenceFinished(this.state.currentSequence);
        this.props.displayText('');
        this.setState({ currentSequence: '' });
    }

    private onLetterPressed(letter: string) {
        if (this.state.currentSequence.length === this.props.sequenceLenght) {
            return;
        }

        const newState = { currentSequence: this.state.currentSequence + letter[0] };
        this.setState(newState);

        this.props.displayText(newState.currentSequence);
    }

    public render() {
        return (
            <div id="keyboard">
                <div id="letters">
                    <button onClick={() => this.onLetterPressed('A')}>A</button>
                    <button onClick={() => this.onLetterPressed('B')}>B</button>
                    <button onClick={() => this.onLetterPressed('C')}>C</button>
                    <button onClick={() => this.onLetterPressed('D')}>D</button>
                    <button onClick={() => this.onLetterPressed('E')}>E</button>
                    <button onClick={() => this.onLetterPressed('F')}>F</button>
                    <button onClick={() => this.onLetterPressed('G')}>G</button>
                    <button onClick={() => this.onLetterPressed('H')}>H</button>
                    <button onClick={() => this.onLetterPressed('I')}>I</button>
                </div>
                <div id="actions">
                    <button onClick={() => this.onCancelPressed()}>Cancel</button>
                    <button onClick={() => this.onEnterPressed()}>Enter</button>
                </div>
            </div>
        );
    }
}
