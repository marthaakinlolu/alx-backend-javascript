/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Martha Akinlolu <https://github.com/marthaakinlolu>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
