import Button from "~/components/button";
import {useState} from "react";

export default function UserCard({user}) {

	const [following, setFollowing] = useState(false)
	const [showUnfollow, setShowUnfollow] = useState(false)

	const handleFollowClick = (e) => {
		e.stopPropagation()
		setFollowing(true)
	}

	const handleUnfollowClick = (e) => {
		e.stopPropagation()
		setFollowing(false)
	}

	return (
		<button className="py-3 px-4 flex gap-3 transition-colors hover:bg-[#080808]">
			<div className="flex-1 flex gap-3">
				<img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt=""/>
				<div className="w-[calc(100%-3.25rem)] text-left">
					<div className="leading-5 font-bold truncate">
						{user.fullName}
					</div>
					<div className="text-[#71767b] truncate">@{user.username}</div>
				</div>
			</div>
			<div className="flex items-center">
				{following ? (
					<Button
						variant="white-outline"
						size="small"
						onClick={handleUnfollowClick}
						onMouseEnter={() => setShowUnfollow(true)}
						onMouseLeave={() => setShowUnfollow(false)}
						className="whitespace-nowrap group font-medium bg-black text-white border border-[#536471] w-[99px] h-[32px] hover:bg-[#f4212e1a] hover:text-[#f4212e] hover:border-[#f4212e1a]"
					>
						<div className={!showUnfollow ? 'flex' : 'hidden'}>Following</div>
						<div className={showUnfollow ? 'flex' : 'hidden'}>Unfollow</div>
					</Button>
				) : (
					<Button 
						className="bg-[#eff3f4] w-[78px] h-[32px] font-medium" 
						variant="white" 
						size="small" 
						onClick={handleFollowClick}
					>
						Follow
					</Button>
				)}
			</div>
		</button>
	)
}