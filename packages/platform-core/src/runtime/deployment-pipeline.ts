export type DeploymentStep = { id: string; name: string; action: string; input?: Record<string, unknown> };
export type DeploymentPipeline = { id: string; appId: string; environmentId: string; steps: DeploymentStep[] };

export async function runDeploymentPipeline(pipeline: DeploymentPipeline) {
  const results = [];
  for (const step of pipeline.steps) {
    results.push({ stepId: step.id, status: 'completed', output: { action: step.action } });
  }
  return { pipelineId: pipeline.id, status: 'completed', results };
}
