/* eslint-disable no-console */
import React, { useEffect, useState} from "react"
import { graphql, navigate } from "gatsby"
import { useDispatch } from "react-redux"
import Typed from "react-typed"
import Img from "gatsby-image"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import NewsCard from "../components/News"
import Form from "../components/Form"
import Reaveler from "../components/Reaveler"
import Input from "../components/Form/Input"
import Topic from "../components/Topic"
import Testimonies from "../components/Testimonies"
import Line from "../components/VerticalLine"
import { setLogoUrl, setFooterVisible } from "../redux/actions"
import Video from "../components/YTVideo"

import homeBanner from "../assets/images/undraw_web_developer_p3e5.svg"


import lightLogo from '../assets/images/milkish.png';
import background from '../assets/images/home_top-left.svg';
import ill2 from '../assets/images/ill1.png';
import ill3 from '../assets/images/ill2.png';
import ill4 from '../assets/images/ill3.png';
import ill5 from '../assets/images/ill4.png';
import ill6 from '../assets/images/ill5.png';
import ImgSecond from "../assets/images/IMG_2390.jpg"
import IllustrationThird from "../assets/images/mission.svg"
import IllustrationFourth from "../assets/images/undraw_researching_22gp.svg"
import IllustrationThird2 from "../assets/images/illfour2.svg"
import IllustrationThird3 from "../assets/images/illfour3.svg"
import point from "../assets/images/point.svg"
import play from "../assets/images/play.svg"
import homeMiddleThird from "../assets/images/homeMiddleThird.svg"

import "../assets/styles/pages/home.scss"


const IndexPage = ({ data: { videoPreview } }) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(
			setLogoUrl({
				logo: lightLogo,
			})
		)
		setFooterVisible({
			visible: true,
		})(dispatch)
	}, [])
	const [state, setState] = useState({
		isOpened: false,
	  });

	return (
		<Layout>
			<SEO title="Home" />
			<div className="home">
				<div className="home__overlay">
					<div
						className="home__overlay--1"
						style={{
							backgroundImage: `url(${background})`,
						}}
					/>
				</div>
				<div className="home__container">
					<div className="home__grid">
						<div className="home__grid--item">
							<div className="home__typed">
								<h1>Gain the Power to Bring Your Ideas to Life!</h1>
								<p>
								We are offering simple, hands-on tech courses to inspire young 
								people to creatively use technology to invent solutions.
								</p>
							</div>
							<span>
								<Button
									type="primary"
									onClick={e => {
										e.preventDefault()
										navigate("/signup/")
									}}
								>
									Get involved
								</Button>
							</span>
						</div>
						<div className="home__grid--item">
						   <div
								className="hero__play"
								style={{
									backgroundImage: `url(${!state.isOpened? play:'none'})`
								}}
								onClick={(e) => {
									setState({
									  isOpened: true,
									});
									e.preventDefault();
								  }}
							/>
							{!state.isOpened && (
							<Img
								fluid={videoPreview.childImageSharp.fluid}
								alt="Hero"
								className="hero__image"
							/> )}
							{state.isOpened && (
							<Video videoSrcURL="https://www.youtube.com/embed/w7VSXm4SsNw?controls=0&rel=0"videoTitle="Official Music Video on YouTube" />
							)}
							
						</div>
					</div>
				</div>
				<div className="home__second">
					<div className="home__overlay">
						<div
							className="home__overlay--2"
							style={{
								backgroundImage: `url(${ill2})`,
							}}
						/>
					</div>
					<h1 className="home__second--title">Technology is the Future</h1>
					<div className="home__second__container">
						<div className="home__second__container__left">
							<div className="home__second__container__left--item">
								<div
									className="point"
									style={{
										backgroundImage: `url(${point})`,
									}}
								/>
								<p>We want to give every African youth a glimpse of what's possible.</p>
							</div>
							<div className="home__second__container__left--item">
								<div
									className="point"
									style={{
										backgroundImage: `url(${point})`,
									}}
								/>
								<p>We want to give you a chance to interact with and to create technology.</p>
							</div>
						</div>
						<Line color="white"/>
						<div className="home__second__container__right">
							<div
								className="home__second__container__right--image"
								style={{
									backgroundImage: `url(${ImgSecond})`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			
			<div className="home__third">
				<div className="home__overlay">
					<div
						className="home__overlay--3"
						style={{
							backgroundImage: `url(${ill3})`,
						}}
					/>
				</div>
				<div className="home__third__container">
					<div className="home__third__container__left">
						<h1 className="home__third__container__left--title">
							A Project by Students for Students
						</h1>
						<div className="home__third__container__left--item hide">
							<div
								className="point"
								style={{
									backgroundImage: `url(${point})`,
								}}
							/>
							<p>
								We are an Edtech Venture by STEM Students & recent graduates from various universities across the world.
							</p>
						</div>
						<div className="home__third__container__left--item">
							<div
								className="point"
								style={{
									backgroundImage: `url(${point})`,
								}}
							/>
							<p>
								We are an Edtech Venture by STEM Students & recent graduates from various universities across the world.						
							</p>
						</div>
						<div className="home__third__container__left--item">
							<div
								className="point"
								style={{
									backgroundImage: `url(${point})`,
								}}
							/>
							<p>
								We are committed to introducing every African High School Student to Technology in a relatable way.
							</p>
						</div>


						<h1 className="home__third__container__left--title">
							Technology Doesn't Have to Sound Exotic
						</h1>
						<div className="home__third__container__left--item">
							<div
								className="point"
								style={{
									backgroundImage: `url(${point})`,
								}}
							/>
							<p>
								Technology relates to our every day life, wherever we are from.
							</p>
						</div>
						<div className="home__third__container__left--item">
							<div
								className="point"
								style={{
									backgroundImage: `url(${point})`,
								}}
							/>
							<p>
								We are offering you simplified, carefully selected, specialised, hands-on and contextualised technology courses.
							</p>
						</div>
					</div>

					<div className="home__third__container__right">
						<div
							className="home__third__container__right--image"
							style={{
								backgroundImage: `url(${IllustrationThird})`,
							}}
						/>
					</div>
				</div>
			</div>
			
			<div className="home__fourth">
				<div className="home__overlay">
					<div
						className="home__overlay--4"
						style={{
							backgroundImage: `url(${ill4})`,
						}}
					/>
				</div>
				<div className="home__fourth__container">
					<div className="home__fourth__container__left">
						<Reaveler
							heading="Learn at Your Convenience"
							content="We have varied innovative ways to support your learning regardless of your circumstances."
						/>
						<Reaveler
							heading="Learn from Your Future Selves"
							content="Our tutors are exceptional students and recent graduates of Engineering and Informatics from best universities across the world.
							They won't just be your tutors, but also mentors."
						/>
						<Reaveler
							heading="Learn to Imagine and Create"
							content="Technology is only useful if used to create solutions to problems humanity faces.
							Our courses are designed to trigger your imagination and to make you a problem solver through real world projects."
						/>
					</div>

					<div className="home__fourth__container__right">
						<div
							className="home__fourth__container__right--image"
							style={{
								backgroundImage: `url(${IllustrationFourth})`,
							}}
						/>
					</div>
				</div>
				
			</div>

			<div className="home__topics">
				<div className="home__overlay">
					<div
						className="home__overlay--5"
						style={{
							backgroundImage: `url(${ill5})`,
						}}
					/>
				</div>
				<div className="home__topics--container">
					<h1 className="home__topics--title">Our courses</h1>
					<div className="home__topics--grid">
						<Topic caption="Python Programming" link="/testing" />
						<Topic caption="Scratch Programming" link="/courses" />
						<Topic caption="App Develpment" link="/electronics" />
						<Topic caption="Web Development" link="/school-clubs" />
						<Topic caption="Game Development" link="/science" />
					</div>
				</div>
				
			</div>
			<div className="home__sixth">
				<div className="home__overlay">
					<div
						className="home__overlay--6"
						style={{
							backgroundImage: `url(${ill6})`,
						}}
					/>
				</div>
				<Testimonies />
				
			</div>
		</Layout>
	)
}

export const query = graphql`
	{
		videoPreview: file(relativePath: { eq: "video-preview.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

export default IndexPage
