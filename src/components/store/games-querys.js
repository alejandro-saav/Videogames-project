const fields = `fields name,genres.name,aggregated_rating,cover.url,involved_companies.company.name,videos.video_id,screenshots.url,first_release_date,summary,platforms.name,similar_games.name,similar_games.cover.url,game_modes.name;`;

const nullExcludeStr = `where name != null & genres.name != null & cover.url != null & first_release_date != null & platforms.name != null & videos.video_id != null`;

const querys = {
  recentGames: `${fields} sort first_release_date desc; ${nullExcludeStr} & aggregated_rating != null & first_release_date < 1660770765`,
  comingSoon: `${fields} sort first_release_date asc; ${nullExcludeStr} & first_release_date > 1662424992`,
  top100: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null`,
  shooters: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Shooter"`,
  mmo: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Role-playing (RPG)"`,
  platformsGames: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Platform"`,
  indies: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Indie"`,
  ps4: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "PlayStation 4"`,
  xbox: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "Xbox One"`,
  pc: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "PC (Microsoft Windows)"`,
  nintendo: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "Nintendo Switch"`,
  pruebas: `${fields} sort first_release_date asc; where platforms.name != null & videos.video_id != null & first_release_date > 1662424992; limit 400;`,
};

export default querys;
// first_release_date != null &
// 1470960000;
// 1662424992;
