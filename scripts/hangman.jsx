var Head = React.createClass({
    render: function() {
        return(
            <div>This is the head...</div>
        )
    }
});


var Body = React.createClass({
    render: function() {
        return(
            <div>This is the body...</div>
        )
    }
});

var ArmR = React.createClass({
    render: function() {
        return(
            <div>This is the right arm...</div>
        )
    }
});


var ArmL = React.createClass({
    render: function() {
        return(
            <div>This is the left arm...</div>
        )
    }
});

var LegR = React.createClass({
    render: function() {
        return(
            <div>This is the right leg...</div>
        )
    }
});

var LegL = React.createClass({
    render: function() {
        return(
            <div>This is the left leg...</div>
        )
    }
});

var Main = React.createClass({
    render: function () {
        return(
            <div>
                <h1>HangMan Games</h1>
                <Head />
                <Body />
                <ArmR />
                <ArmL />
                <LegL />
                <Legr />
            </div>            
        )
    }
});

ReactDOM.render(
	<Main />, document.getElementById('container')
);