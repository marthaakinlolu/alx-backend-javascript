/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Ray Oshafi <https://github.com/DrRay21>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
