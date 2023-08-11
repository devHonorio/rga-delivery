import Link from 'next/link'

export default function ButtonIcon({ icon, content, align, href = '' }) {
	return (
		<Link href={href} className={`${align} ${styles.buttonIcon}`}>
			<div className={styles.divIcon}>{icon}</div>
			<span className={styles.content}>{content}</span>
		</Link>
	)
}

const styles = {
	buttonIcon: `flex items-center  bg-white md:py-2 md:px-3 rounded-2xl gap-3 shadow-md font-medium`,
	divIcon: `md:bg-orange-400 bg-white p-2 rounded-xl`,
	content: `hidden md:block md:text-sm`,
}
