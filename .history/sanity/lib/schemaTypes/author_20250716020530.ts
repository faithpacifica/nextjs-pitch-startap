export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon:UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),