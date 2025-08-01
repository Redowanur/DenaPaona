import { useState, useEffect } from 'react';
import SplitBills from '../../assets/split-bills.png';
import SettleUp from '../../assets/settle-up.png';
import TrackExpenses from '../../assets/track-expenses.png';

const Features = () => {
	const [activeFeature, setActiveFeature] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const features = [
		{
			name: "Split Bills Easily",
			description: "Add expenses in seconds and split them fairly with friends or groups. Whether it's a dinner, trip, or rent, DenaPaona makes sure everyone pays their share.",
			image: SplitBills
		},
		{
			name: "Settle Up Anytime",
			description: "Quickly clear dues with a single click. Record cash, bKash, or bank payments and keep your balances up to date without confusion.",
			image: SettleUp
		},
		{
			name: "Track All Expenses",
			description: "Stay on top of your money. View detailed history, balances, and summaries so you always know who owes whom and for what.",
			image: TrackExpenses
		}
	];

	return (
		<section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200/10 to-pink-200/10 rounded-full blur-2xl animate-ping" style={{ animationDelay: '4s' }}></div>
			</div>

			<div className="w-[90%] max-w-7xl mx-auto relative z-10">
				{/* Header Section */}
				<div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
						<span className="bg-gradient-to-r from-[#07B2A7] to-[#11B7AC] bg-clip-text text-transparent">
							Everything You Need
						</span>
					</h2>

					<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Simplify expense sharing with powerful tools designed for real-world scenarios
					</p>
				</div>

				{/* Interactive Feature Cards */}
				<div className="space-y-24">
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							feature={feature}
							index={index}
							isActive={activeFeature === index}
							onHover={() => setActiveFeature(index)}
							isLeft={index % 2 === 0}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({ feature, index, isActive, onHover, isLeft }: any) => {
	return (
		<div
			className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${isActive ? 'scale-[1.02]' : 'scale-100'
				}`}
			onMouseEnter={onHover}
		>
			{isLeft ? (
				<>
					<FeatureImage feature={feature} isActive={isActive} />
					<FeatureDescription feature={feature} index={index} />
				</>
			) : (
				<>
					<FeatureDescription feature={feature} index={index} />
					<FeatureImage feature={feature} isActive={isActive} />
				</>
			)}
		</div>
	);
};

const FeatureImage = ({ feature, isActive }: any) => (
	<div className="relative group">
		{/* Main image container */}
		<div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
			<div className={`w-full h-100 flex items-center justify-center relative`}>
				<img src={feature.image} className='h-full object-contain' />
			</div>
		</div>
	</div>
);

const FeatureDescription = ({ feature, index }: any) => (
	<div className={`space-y-8 transition-all duration-700 delay-${index * 100}`}>

		{/* Feature title */}
		<h3 className="font-bold text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
			{feature.name}
		</h3>

		{/* Feature description */}
		<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
			{feature.description}
		</p>

		{/* Decorative elements */}
		<div className="flex gap-2 pt-4">
			<div className={`w-16 h-1 bg-[#07B2A7] rounded-full`}></div>
			<div className={`w-8 h-1 bg-[#07B2A7] rounded-full opacity-60`}></div>
			<div className={`w-4 h-1 bg-[#07B2A7] rounded-full opacity-30`}></div>
		</div>
	</div>
);

export default Features;