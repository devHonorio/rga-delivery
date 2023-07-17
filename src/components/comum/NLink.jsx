import Link from 'next/link'

export default function Nlink({ href, content, className }) {
	return (
		<Link
			className={
				'font-bold text-lg px-4 border-b-2 border-transparent hover:border-orange-400 lg:text-base ' +
				className
			}
			href={href}>
			{content}
		</Link>
	)
}
