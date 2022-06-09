import defaultConfig from 'config'
import { mergeObject } from 'utils/mergeObject'
import { token } from 'resources/token'
import { organisms } from 'resources/organisms'
import { dataset } from 'resources/dataset'
import { institutions } from 'resources/institutions'
import { platforms } from 'resources/platforms'
import { compendia } from 'resources/compendia'
import { processors } from 'resources/processors'
import { samples } from 'resources/samples'
import { experiments } from 'resources/experiments'
import { search } from 'resources/search'
import { stats } from 'resources/stats'
import { jobs } from 'resources/jobs'
import { qnTargets } from 'resources/qnTargets'
import { computationalResults } from 'resources/computationalResults'
import { computedFiles } from 'resources/computedFiles'
import { originalFiles } from 'resources/originalFiles'
import { statsAbout } from 'resources/statsAbout'
import { transcriptomeIndices } from 'resources/transcriptomeIndices'

export {
  token,
  institutions,
  dataset,
  platforms,
  compendia,
  processors,
  samples,
  experiments,
  search,
  stats,
  jobs,
  qnTargets,
  computationalResults,
  computedFiles,
  originalFiles,
  statsAbout,
  transcriptomeIndices
}

export default (override = {}) => {
  const config = mergeObject(defaultConfig, override, true)

  return {
    updateConfig: (changes) => mergeObject(config, changes, false),
    token: token(config),
    dataset: dataset(config),
    organisms: organisms(config),
    institutions: institutions(config),
    platforms: platforms(config),
    compendia: compendia(config),
    processors: processors(config),
    samples: samples(config),
    search: search(config),
    stats: stats(config),
    jobs: jobs(config),
    experiments: experiments(config),
    qnTargets: qnTargets(config),
    computationalResults: computationalResults(config),
    computedFiles: computedFiles(config),
    originalFiles: originalFiles(config),
    statsAbout: statsAbout(config),
    transcriptomeIndices: transcriptomeIndices(config)
  }
}
