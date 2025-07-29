import SplitBill from '../../assets/split-bills.jpg';
import SettleUp from '../../assets/settle-up.png';
import Track from '../../assets/track-expenses.png';

const Features = () => {
    return (
        <div className="w-[90%] max-w-7xl mx-auto">
            <FeatureCard image={SplitBill} featureName={'Split Bills Easily'} featureDescription={'Add expenses in seconds and split them fairly with friends or groups. Whether it’s a dinner, trip, or rent, DenaPaona makes sure everyone pays their share.'} isLeft={true} />
            <FeatureCard image={SettleUp} featureName={'Settle Up Anytime'} featureDescription={'Quickly clear dues with a single click. Record cash, bKash, or bank payments and keep your balances up to date without confusion.'} isLeft={false} />
            <FeatureCard image={Track} featureName={'Track All Expenses'} featureDescription={'Stay on top of your money. View detailed history, balances, and summaries so you always know who owes whom and for what.'} isLeft={true} />
        </div>
    )
}

interface FeatureType {
    image?: any,
    featureName: string,
    featureDescription: string,
    isLeft?: boolean
}

const FeatureCard = ({ image, featureName, featureDescription, isLeft }: FeatureType) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-2">
        {isLeft ? <FeatureImg image={image} /> :
            <FeatureDescription featureName={featureName} featureDescription={featureDescription} /> }

        {isLeft ?  <FeatureDescription featureName={featureName} featureDescription={featureDescription}/> :
            <FeatureImg image={image} />}

    </div>
)

const FeatureImg = ({ image }: any) => (
    <div className='lg:p-10 md:h-140 flex justify-center items-center'>
        <img src={image} className='w-full h-full object-contain' />
    </div>
)

const FeatureDescription = ({featureName, featureDescription}: FeatureType) => (
    <div className='mb-20 lg:mb-0 lg:h-140 flex flex-col justify-center'>
        <h1 className='font-bold text-4xl md:text-5xl'>{featureName}</h1>
        <p className='text-xl md:text-2xl my-5 text-gray-600'>{featureDescription}</p>
    </div>
)

export default Features