type Props = {
    name: string,
    avatarUrl?: string,
    shape?: 'circle' | 'square'
}

const SelectOptionWithAvatar = ( {avatarUrl, name, shape}: Props ) => {
  return (
    <div>SelectOptionWithAvatar</div>
  )
}

export default SelectOptionWithAvatar