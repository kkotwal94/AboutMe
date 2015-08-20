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
  List,
  ListDivider,
  ListItem,
  FlatButton
} = mui;

export default class About extends React.Component {
constructor(props) {
		super(props);
		//ThemeManager.setTheme(ThemeManager.types.DARK);
	}

  componentWillMount() {
  	
  }

	render() {
		return(
             <div>
             <div className ="wrapper" style = {{overflow: 'hidden'}}>
             <h1 style ={{marginLeft: '10px'}}>About me</h1>
             
             <div className = "myProfile" style ={{width: '45%', float: 'left', marginLeft: '10px'}}>
             <Card style={{align: 'center'}} initiallyExpanded={false}>
            <CardHeader
              title="Karan Kotwal"
              subtitle="Born on October 11th, 1994"
              avatar="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/090/072/1b7b0f9.jpg"
              showExpandableButton={true}/>
            
            <CardTitle title="Some info about me" expandable={true}/>
             <List expandable={true}>
              <ListItem primaryText="Currently living at Newark, DE"  />
              <ListItem primaryText="Pursuing Degree in Computer Science at the University of Delaware(Class of 2016)"  />
              <ListItem primaryText="Email: kotwalkaran64@gmail.com | bNastyK@udel.edu"  />
              <ListItem primaryText="Hobbies: Playing Dota 2 with friends, drawing(badly), playing soccer(basketball, tennis..)" />
              <ListItem primaryText="Working experience: A.Duie Pyle Application Development Intern, and Rite Aid Pharmacy Technician" />
            </List>
            <CardText expandable={false}>
            Just a BOY who wants to make the dankest game of his life. Born in New York City, moved to Delaware 14 years after. Started programming when I was 14, hacked some First-Person-Shooter by making a D3D wallhack in C++.
            </CardText>
            <CardText expandable={false}>
            I think reactJS is really cool. I center it around a lot of my apps because it reminds me of a Game State as if you were programming a game itself. However Im just manipulating the DOM. Eventually I picked up other tools to enhance my usage of the framework, like NodeJS, ExpressJS, MongoDB, React-router, Webpack, and Flux(altJS). Right now Im learning graphQL and Relay which were also presented by Facebook. I want to concentrate into webdevelopment/software engineering or game development. Games like Dota2 fascinate me in a sense that they wrote their entire Game Engine themselves. However the Javascript life is always changing at a fast pace. With all the new enhancements in ES6/7 and the constant updates Frameworks are doing makes the web interesting.
            </CardText>
          </Card>
             
             <div className="Hobbies">
             <Card  style ={{marginTop: '10px'}}initiallyExpanded={true}>
            <CardHeader
              title="Dota2"
              subtitle="MOBA"
              avatar="http://fc02.deviantart.net/fs70/f/2013/332/c/4/dota_2_icon_by_benashvili-d6w0695.png"
              showExpandableButton={true}/>
           
            <CardMedia overlay={<CardTitle title="Shadow Fiend" subtitle="Versatile"/>} expandable={true}>
              <img src="http://besthqimages.mobi/wp-content/uploads/dota-2-shadow-fiend-rekindling-soul-pictures-4.png" style={{height: '336px'}}/>
            </CardMedia>

            <CardTitle title="Playing Dota" expandable={true}/>
            <CardText expandable={false}>
            Dota 2 is one of the funnest team based and complex, yet flexible game I have ever played. I enjoy playing it whenever I can, puts me in a good mood even though the community is toxic(every game though right?). The mechanics make the game incredible, and most importantly The International which holds a very large prize pool (~18million) is exhilirating to watch. I plan to attend it this year!
            </CardText>
            
          </Card>
             </div>

             <div className="Ideas">
             <Card  style ={{marginTop: '10px'}}initiallyExpanded={true}>
            <CardHeader
              title="Ideas for the Future"
              subtitle="UE4, React"
              avatar="https://cdn3.iconfinder.com/data/icons/abstract-1/512/idea_E-512.png"
              showExpandableButton={true}/>
           
            <CardMedia overlay={<CardTitle title="UE4" subtitle="3D World generated"/>} expandable={true}>
              <img src="https://de45xmedrsdbp.cloudfront.net/blog/44_Release/landscapeMts-728x419-836253308.png" style={{height: '336px'}}/>
            </CardMedia>

            <CardTitle title="Game DEV and Web Dev Ideas" expandable={true}/>
            <CardText expandable={false}>
            So far I have been doing a lot of web stuff, but I began digging into Unreal engine 4. I also picked up drawing a bit too. I would like to be decent at it to draw 'alright' models. UE4 is a really powerful engine, and I think I can make a good open world adventure game in it.
            </CardText>

            <CardText expandable={false}>
            For web development my next idea is creating a web app that allows people who play dota to create their own heroe concepts. Then based off that other users can upvote/downvote/comment on these concepts.
            Another idea I have is creating a UDEL image gallery site, where users can upload images onto the site and upvote and downvote it. Only based for UD students though. I dont know what the driving force behind it would be though for the oncamp imgur-clone.
            </CardText>
            
          </Card>
             </div>
             </div>
             
             


             <div className= "music" style={{float: 'right', width:'45%', marginRight:'10px', display: 'inline-block', verticalAlign:'top', marginBottom: '10px'}}>
             <Card  initiallyExpanded={true}>
            <CardHeader
              title="Music I Dig"
              avatar="http://d1oi7t5trwfj5d.cloudfront.net/6c/2e/a1943348473cbd3f84f4722f5356/hendrix.jpg"
              showExpandableButton={true}/>
           
            <CardMedia overlay={<CardTitle title="Jimmy Hendrix" subtitle="Awesome guitarist"/>} expandable={true}>
              <img src="http://images.fineartamerica.com/images/artworkimages/mediumlarge/1/jimi-hendrix-juan-jose-espinoza.jpg" style={{height: '675px'}}/>
            </CardMedia>

            <CardTitle title="Genres I mess with" expandable={true}/>
             <List expandable={true} style ={{textAlign: 'left'}}>
              <ListItem primaryText="Classical Rock/Rock N ROLL"  />
              <ListItem primaryText="Lyrical Rap"  />
              <ListItem primaryText="RNB and Hip-Hop"  />
              <ListItem primaryText="Drums And Bass" />
            </List>
            <CardText expandable={false}>
            Jimmy Hendrix was my favorite guitarist growing up but rock and roll in general got me into the guitar a bit. I like other genres just as much, I got into Rap in highschool, and RNB in middle school. As for Rappers I like listening to Kendrick Lamar, Childish Gambino, Logic and JCole.
            </CardText>
            
          </Card>
           
     

             <div className ="sports" style ={{marginTop: '10px'}}>
             <Card style={{align: 'center'}} initiallyExpanded={true}>
            <CardHeader
              title="Sports"
              subtitle="Extracurricular"
              avatar="data:image/jpeg;base64,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"
              showExpandableButton={true}/>
            <CardMedia overlay={<CardTitle title="Messi" subtitle="Dat speed tho"/>} expandable={true}>
              <img src="http://dailymailnews.com/wp-content/uploads/2015/05/messi.jpg" style={{height: '342px'}}/>
            </CardMedia>
            <CardText expandable={false}>
            I play a lot of Soccer, basketball for fun, Wrestling here and there, and tennis occasionally. I like soccer the most however. One of the players I enjoy watching the most is Messi. Homie is an absolute beast. I would kind of like to be as fast as him when I play.
            </CardText>
          </Card>
          </div>
            </div>

             </div>
             </div>
             
			);
	}
}

/**
<CardMedia overlay={<CardTitle title="Dashboard UI" subtitle="CSS"/>} expandable={true}>
              <img src="http://i.imgur.com/o6CqlTe.png"/>
            </CardMedia>
            **/