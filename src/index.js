import { Dataset as DatasetConstructor } from 'dataset'
import defaultConfig from 'config'
import { mergeConfig } from 'utils/mergeConfig'
import { compendia } from 'resources/compendia'
import { computationalResults } from 'resources/computationalResults'
import { computedFiles } from 'resources/computedFiles'
import { dataset } from 'resources/dataset'
import { experiments } from 'resources/experiments'
import { institutions } from 'resources/institutions'
import { jobs } from 'resources/jobs'
import { organisms } from 'resources/organisms'
import { originalFiles } from 'resources/originalFiles'
import { platforms } from 'resources/platforms'
import { processors } from 'resources/processors'
import { qnTargets } from 'resources/qnTargets'
import { samples } from 'resources/samples'
import { search } from 'resources/search'
import { stats } from 'resources/stats'
import { statsAbout } from 'resources/statsAbout'
import { token } from 'resources/token'
import { transcriptomeIndices } from 'resources/transcriptomeIndices'

export {
  compendia,
  computationalResults,
  computedFiles,
  dataset,
  experiments,
  institutions,
  jobs,
  organisms,
  originalFiles,
  platforms,
  processors,
  qnTargets,
  samples,
  search,
  stats,
  statsAbout,
  token,
  transcriptomeIndices
}

let config

export default (override = {}) => {
  config = mergeConfig(defaultConfig, override)

  return {
    updateConfig: (changes) => mergeConfig(config, changes),
    compendia: compendia(config),
    computationalResults: computationalResults(config),
    computedFiles: computedFiles(config),
    dataset: dataset(config),
    experiments: experiments(config),
    institutions: institutions(config),
    jobs: jobs(config),
    organisms: organisms(config),
    originalFiles: originalFiles(config),
    platforms: platforms(config),
    processors: processors(config),
    qnTargets: qnTargets(config),
    samples: samples(config),
    search: search(config),
    stats: stats(config),
    statsAbout: statsAbout(config),
    token: token(config),
    transcriptomeIndices: transcriptomeIndices(config)
  }
}

export const Dataset = DatasetConstructor(dataset(config))
