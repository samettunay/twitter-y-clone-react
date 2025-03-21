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
		<button className="py-3 px-4 flex gap-3 transition-colors hover:bg-[color:var(--background-third)]">
			<div className="flex-1 flex gap-3">
				<img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt=""/>
				<div className="w-[calc(100%-3.25rem)] text-left">
					<div className="leading-5 font-bold truncate">
						{user.fullName}
					</div>
					<div className="text-[color:var(--color-base-secondary)] truncate">@{user.username}</div>
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
						className="whitespace-nowrap group font-medium bg-[color:var(--color-primary)] text-white border border-[color:var(--color-primary)] w-[99px] h-[32px] hover:bg-[red]/20 hover:text-[red] hover:border-[red]"
					>
						<div className={!showUnfollow ? 'flex' : 'hidden'}>Following</div>
						<div className={showUnfollow ? 'flex' : 'hidden'}>Unfollow</div>
					</Button>
				) : (
					<Button 
						className="bg-[color:var(--background-third)] w-[78px] h-[32px] font-medium" 
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