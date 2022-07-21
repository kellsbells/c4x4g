import './index.css';
import heroImage from '../../../../assets/jeep-on-dirt-road.jpeg'

function Hero() {
    return (
        <article className="About-hero" style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="About-hero-wrapper">
                <div className="container">
                    <h1><span>Welcome to the</span><br/>Colorado 4x4 Girls</h1>
                    <h2>Colorado's <span>Girl Only</span>, EXCLUSIVE 4x4 Club</h2>
                    <p>Catherine, the Founder and President of Colorado 4x4 Girls, had a vision for the club to empower like minded women who shared the desire to expand their knowledge while interacting with other females in the community who shared the passion for 4x4 vehicles and off roading. Catherine started the club in 2012 as an all female, Jeep club, and in 2021, it was made into an all female, all full size 4x4 club.</p>
                    <p>Colorado 4x4 Girls is all about community and sisterhood. We work hard to do trail cleanups, volunteer for community events, as well as host our own events every year, giving back to causes, especially suicide awareness and prevention. We have raised thousands of dollars toward this specific cause. We have raised funds and materials for Urban Peak, the Shiloh House, Suicide Prevention Coalition of Colorado and many other non profits. </p>
                    <p>We adopted four trails in Clear Creek County through the Adopt A Road program, and continue to do scheduled trail clean ups to help with the upkeep of these areas so that we may do our part to keep them open to the public. We follow Leave No Trace and Stay the Trail principles. </p>
                    <p>What started out as a small club in 2012, has grown to what we are now! We want our members to make lifelong memories, including getting out on the trail and pushing themselves to try new and somewhat daunting obstacles. We do an all- girls retreat, camping trips with our families and friends, as well as provide opportunities for classes to learn how to recover yourself while off roading, driving skills, basic maintenance and so much more. We have many sponsors who offer discounts on their services and products to our members.</p>
                    <p>We have expectations of our members that can be found in our code of conduct, but to sum it up: no drama, respect your surroundings and others, stay the trail, act appropriately on and off road, come to meets as often as you can and HAVE FUN! We have chapters for most areas in Colorado, and are continually growing. </p>
                    <p>We would love the opportunity to meet you and look forward to you joining us at one of our meet and greets!</p>
                </div>
            </div>
        </article>
    );
}
  
export default Hero;






