export default function ButtonSocial({ icon, href }) {
	return (
		<a
			target='_blank'
			href={href}
			className='h-10 w-10 bg-white flex justify-center items-center rounded-xl shadow-md hover:bg-orange-400'>
			{icon}
		</a>
	)
}
