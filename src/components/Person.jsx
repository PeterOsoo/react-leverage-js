import avatar from "../assets/default-avatar.png"

const Person = ({
	name,
	nickName = "WuodLuo",
	images,
	notes = "Self taught dev",
}) => {
	// before optional chaining

	// const img =
	//   (images && images[0] && images[0].small && images[0].small.url) || avatar;

	const img = images?.[0]?.small?.url || avatar
	return (
		<section class="text-gray-600 body-font px-20 pt-10">
			<img src={img} alt={name} style={{ width: "50px" }} />

			<div class="w-full">
				<h2 class="title-font font-medium text-lg text-gray-900">{name}</h2>
				<h3 class="text-gray-500 mb-3"> Nickname : {nickName} </h3>
				<p class="mb-4">Notes: {notes}</p>
			</div>
		</section>
	)
}
export default Person
