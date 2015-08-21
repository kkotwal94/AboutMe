import React from 'react';
let mui = require('material-ui');
let {
  Avatar,
  Card,
  CardActions,
  CardExpandable,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  FlatButton
} = mui;

export default class Projects extends React.Component {
constructor(props) {
		super(props);
		//ThemeManager.setTheme(ThemeManager.types.DARK);
	}

  componentWillMount() {
  	
  }

  sourceRedirect =() =>{
  	window.location.href = "https://github.com/kkotwal94/IsoReportProcessor";
  }
  isoSite = () => {
    window.location.href ="http://isoreports.kkotwal.me/"
  }
  lazysource = () => {
  	window.location.href ="https://github.com/kkotwal94/TooLazyTo";
  }

  lazysite = () => {
  	window.location.href ="http://toolazy.kkotwal.me/";
  }

  parkingsite = () => {
  	window.location.href ="http://parking.kkotwal.me/";
  }

  parkingsource = () => {
  	window.location.href ="https://github.com/kkotwal94/ParkingLotProj";
  }

  karedditsite = () => {
   window.location.href ="http://kareddit.kkotwal.me/";
  }

  karedditsource = () => {
   window.location.href ="https://github.com/kkotwal94/Kareddit";
  }

  chatsite = () => {
  	window.location.href = "http://chat.kkotwal.me/";
  }

  chatsource = () => {
  	window.location.href = "https://github.com/kkotwal94/ChatApp";
  }

  boardsite = () => {
  	window.location.href ="http://ec2-52-11-66-109.us-west-2.compute.amazonaws.com/";
  }

  boardsource = () => {
  	window.location.href ="https://github.com/kkotwal94/BoardGameSelector";
  }

  d3dsource = () => {
  	window.location.href ="https://github.com/kkotwal94/Counterstrike-GO";
  }

	render() {
		return(
             <div>
             <h1 style={{textAlign: 'center'}}>Personal Projects</h1>
             <div className= 'projects' style={{textAlign: 'center', width: '50%',marginLeft: 'auto', marginRight: 'auto'}}>
             <div className = 'isoreport'>
             <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="Isomorphic/Universal Report Processor"
              subtitle="With ReactJS and Flux"
              avatar="http://ih1.redbubble.net/image.32576156.9850/sticker,375x360.png"
              showExpandableButton={true}/>
            <CardMedia overlay={<CardTitle title="Dashboard UI" subtitle="CSS"/>} expandable={true}>
              <img src="http://i.imgur.com/o6CqlTe.png"/>
            </CardMedia>
            <CardTitle title="Report Processor" subtitle="Try it out" expandable={true}/>
            <CardActions expandable={true}>
              <FlatButton label="View Source" onClick ={this.sourceRedirect}/>
              <FlatButton label="View Demo" onClick ={this.isoSite}/>
            </CardActions>
            <CardText expandable={true}>
              My latest project which was done at my Internship at A. Duie Pyle. It involved me learning Flux, webpack, SCSS, Isojs, and react-router. Using all these tools along with ReactJS/Mongo/Node I was able to produce a Web App that can create reports, join reports, delete reports, edit reports, and add SubReports (creating a tree like data-structure). Most importantly it was made so a Manager can select his employees, and add them under his jurisdiction, and then assign them reports. While doing all this, all Users who belong to the manager/boss can only see Documents they were assigned or are involved in.
            </CardText>
          </Card>
          </div>
          
          <div className = 'TooLazyTo' style ={{marginTop: '15px'}}>
          <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="TooLazyTo.."
              subtitle="With ReactJS and NodeJS"
              avatar="https://omitlimitation.files.wordpress.com/2014/04/pusheen-so-lazy-cute-animated-art-gifs.gif"
              showExpandableButton={true}/>
            <CardMedia overlay={<CardTitle title="Front Page" subtitle="Forum"/>} expandable={true}>
              <img src="http://i.imgur.com/c9071hY.png"/>
            </CardMedia>
            <CardTitle title="A Forum with upvoting and downvoting" subtitle="A Hackathon idea" expandable={true}/>
            <CardActions expandable={true}>
              <FlatButton label="View Source" onClick ={this.lazysource}/>
              <FlatButton label="View Demo" onClick ={this.lazysite}/>
            </CardActions>
            <CardText expandable={true}>
              Too Lazy To... is a app created to have people exchange favors with each other, whether its through money or other favors itself, like a oncampus craigslist, except you have rep. So dont lose your street cred by forgetting to hold up your end of the bargain. Really, you dont have to ask for anything either, a true hero would do some things for free! Through this app (Node, Mongo, React, Express) I learned that it was terribly hard to communicate between components without writing fragile code. Which was when I discovered react. I also learned that load time and anything more than a second feels like forever.
            </CardText>
          </Card>
             </div>

             <div className = 'ParkingLotProject' style ={{marginTop: '15px'}}>
          <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="Parking Lot Manager"
              subtitle="With ReactJS and NodeJS/ExpressJS"
              avatar="http://flintstones.clipartonline.net/_/rsrc/1348321503529/home/Flintstones_Family_Car-2.png?height=320&width=320&height=400&width=400"
              showExpandableButton={true}/>
            <CardMedia expandable={true}>
              <img src="http://i.imgur.com/xksFFEn.png"/>
            </CardMedia>
            <CardTitle title="Managing A Duie Pyle's Parking Lot" subtitle="A Hackathon idea" expandable={true}/>
            <CardActions expandable={true}>
              <FlatButton label="View Source" onClick ={this.parkingsite}/>
              <FlatButton label="View Demo" onClick ={this.parkingsource}/>
            </CardActions>
            <CardText expandable={true}>
              A parking lot system programmed in NodeJS, ReactJS, ExpressJS, and templating. I used mongodb for a database. This project just randomizes all the users that are signed up with a profile to a parking spot. The slick part is their is a admin profile to it. The admin can add violations based off user or vehicle information, the admin can also edit profiles and select slots for users to stop at. The admin can most importantly add violations and notes, whether they have the user or not. If the user is not determined when adding a violation, the admin may assign a vehicle a violation, and then a vehicle to a user when they figure it out who the violation belongs to.

The user may do all the same but they cannot edit info like parking lot #, or tag #s. They can however have multiple vehicles and select the one that is currently in use.

If you decide to pull it, create some users, and create a user with the id Admin
            </CardText>
          </Card>
             </div>

             <div className = 'Kareddit' style ={{marginTop: '15px'}}>
          <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="Kareddit"
              subtitle="With ReactJS and NodeJS"
              avatar="http://wcdn2.dataknet.com/static/resources/icons/set109/18a0c87d.png"
              showExpandableButton={true}/>
            <CardMedia overlay={<CardTitle title="r/Dota2" subtitle="subreddit"/>} expandable={true}>
              <img src="http://i.imgur.com/aAdhhBS.png"/>
            </CardMedia>
            <CardTitle title="A Forum with upvoting and downvoting" subtitle="Reddit-clone" expandable={true}/>
            <CardActions expandable={true}>
              <FlatButton label="View Source" onClick ={this.karedditsource}/>
              <FlatButton label="View Demo" onClick ={this.karedditsite}/>
            </CardActions>
            <CardText expandable={true}>
            This was done for an Advanced Web Technologies course. It is a reddit clone and has most of the same functionality. You can have a link post, or just a body post, or even both. It was my first attempt at making a solo stack-based website. The idea was inherited from the MEAN stack, except using Angular I used React.
            </CardText>
          </Card>
             </div>

           <div className = 'ChatApp' style ={{marginTop: '15px'}}>
          <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="Chat App"
              subtitle="HTML/CSS, javascript(jquery) and Socket.io"
              avatar="http://iconshow.me/media/images/Application/Modern-Flat-style-Icons/png/512/Chat.png"
              showExpandableButton={true}/>
            <CardMedia overlay={<CardTitle title="Chat Box" subtitle="Just me and jeff"/>} expandable={true}>
              <img src="http://i.imgur.com/GFcuVmF.jpg"/>
            </CardMedia>
            <CardTitle title="Cool Chat Application" subtitle="Socket.io intro" expandable={true}/>
            <CardActions expandable={true}>
              <FlatButton label="View Source" onClick ={this.chatsource}/>
              <FlatButton label="View Demo" onClick ={this.chatsite}/>
            </CardActions>
            <CardText expandable={true}>
            This is my chat app done with socket.io and javascript. The CSS is pretty dank. Gained experience with socket.io.
            </CardText>
          </Card>
             </div>

             <div className = 'BoardGame' style ={{marginTop: '15px'}}>
          <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="BoardGame Selector"
              subtitle="HTML/CSS, javascript"
              avatar="https://cdn2.iconfinder.com/data/icons/app-icons-2/100/icon_66244-512.png"
              showExpandableButton={true}/>
            <CardMedia expandable={true}>
              <img src="http://i.imgur.com/WjIL4Cb.png"/>
            </CardMedia>
            <CardTitle title="Board Game Selector" subtitle="Javascript" expandable={true}/>
            <CardActions expandable={true}>
              <FlatButton label="View Source" onClick ={this.boardsource}/>
              <FlatButton label="View Demo" onClick ={this.boardsite}/>
            </CardActions>
            <CardText expandable={true}>
            This was a app to take in a lot of board games (100+) and sort them by max player, min player, duration, rank, and it they can be searched. Was done to learn ajax.
            </CardText>
          </Card>
             </div>

             <div className = 'CSGO' style ={{marginTop: '15px'}}>
          <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="CSGO D3D Offline"
              subtitle="C++, DirectX9,10,11"
              avatar="http://www.optihacks.com/wp-content/uploads/csgo_icon.png"
              showExpandableButton={true}/>
            <CardMedia expandable={true}>
              <img src="http://oi57.tinypic.com/epn0j5.jpg"/>
            </CardMedia>
            <CardTitle title="CSGO" subtitle="C++" expandable={true}/>
            <CardActions expandable={true}>
              <FlatButton label="View Source" onClick ={this.d3dsource}/>
            </CardActions>
            <CardText expandable={true}>
            This was a D3D wallhack made in C++, was never publicized or monetized or shared. Was already detected by their anti-cheat, however I messed around with it offline(NON-VAC servers). It just hooks on to d3d9, overwrites endscene, DrawIndexedPrimitive, and registers its own colors. The magic happens when we disable the zbuffer allowing us to see them through walls. Render colors in Endscene, disable z-buffer in DIP.
            </CardText>
          </Card>
             </div>

             </div>
             </div>
			);
	}
}