import React from 'react'
import Button from '~/components/button'

export default function New() {
    return (
        <div className="py-4 w-[90%]">
            <Button className="bg-[color:var(--color-primary)] text-white" size="large">Post</Button>
        </div>
    )
}
