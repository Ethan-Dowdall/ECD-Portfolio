import SplitText from './SplitText'
import './header.css'

function Header() {
    const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
    return ( 
        <div className="headerContainer">
            <div className="headerContent">
            <SplitText
                text="This should be the header"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            </div>
        </div>
    );
}

export default Header