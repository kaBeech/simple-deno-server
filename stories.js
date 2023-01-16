import format from "https://deno.land/x/date_fns/format/index.js";

const mapStory = (story) => ({
  title: story.title,
  url: story.url,
  createdAt: format(new Date(story.created_at_i * 1000), "yyyy-MM-dd", {}),
});

export { mapStory };
