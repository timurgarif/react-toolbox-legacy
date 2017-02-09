import pick from 'ramda/src/pick';

export default function getPassThroughProps(option = []) {
  return (props, node) => (
    Array.isArray(option)
      ? pick(option, props)
      : option(props, node)
  );
}