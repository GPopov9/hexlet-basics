class RenameLessonVersions < ActiveRecord::Migration[6.0]
  def change
    rename_column :language_module_lesson_versions, :language_module_version_id, :module_version_id
    rename_column :language_module_lesson_versions, :language_module_lesson_id, :lesson_id
  end
end