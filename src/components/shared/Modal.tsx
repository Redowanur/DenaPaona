import { useEffect } from "react";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from 'motion/react';

interface ModalType {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalType) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "auto";
		};
	}, [isOpen, onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					onClick={onClose}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex justify-center items-center bg-black/20 backdrop-blur-sm"
				>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: "spring", stiffness: 400, damping: 25 }}
						className="relative bg-white rounded-xl shadow-xl p-6 pt-10"
					>
						<button
							className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:text-gray-600 cursor-pointer"
							onClick={onClose}
							aria-label="Close modal"
						>
							<X />
						</button>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
