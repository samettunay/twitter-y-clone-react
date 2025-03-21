import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function SidebarSection({ title, children, more }) {
	return (
		<section className="mb-4 rounded-2xl border border-[color:var(--background-border)] bg-[color:var(--background-primary)]">
			<h5 className="py-3 px-4 text-[color:var(--color-base)] text-xl font-extrabold leading-6 flex items-center">
				{title}
			</h5>
			<div className="grid text-[color:var(--color-base)]">
				{children}
			</div>
			{more && (
				<Link
					to={more}
					className="h-[3.25rem] flex rounded-b-2xl items-center px-4 text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--background-third)]"
				>
					Show more
				</Link>
			)}
		</section>
	)
}

SidebarSection.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
	more: false
}